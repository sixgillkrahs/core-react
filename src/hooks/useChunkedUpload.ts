import { useState } from 'react';

export default function useChunkedUpload({
  chunkSize = 5 * 1024 * 1024,
  concurrency = 3,
} = {}) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'done' | 'error'>(
    'idle',
  );

  const upload = async (file: File, uploadId: string, endpoint = '/upload') => {
    setStatus('uploading');
    setProgress(0);

    const totalChunks = Math.ceil(file.size / chunkSize);
    const chunks = Array.from({ length: totalChunks }, (_, i) => ({
      blob: file.slice(i * chunkSize, (i + 1) * chunkSize),
      index: i,
    }));

    let completed = 0;

    const uploadChunk = async (chunk: Blob, index: number) => {
      const formData = new FormData();
      formData.append('file', chunk);
      formData.append('chunkIndex', index.toString());
      formData.append('totalChunks', totalChunks.toString());
      formData.append('uploadId', uploadId);

      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error(`Chunk ${index} failed`);

      completed += 1;
      setProgress(Math.round((completed / totalChunks) * 100));
    };

    const queue: Promise<void>[] = [];
    const iterator = chunks[Symbol.iterator]();

    const worker = async () => {
      for (;;) {
        const next = iterator.next();
        if (next.done) break;
        const { blob, index } = next.value;
        await uploadChunk(blob, index);
      }
    };

    for (let i = 0; i < concurrency; i++) {
      queue.push(worker());
    }

    try {
      await Promise.all(queue);
      setStatus('done');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return { upload, progress, status };
}
