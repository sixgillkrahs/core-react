import { useChunkedUpload, useTitle } from '@/hooks';
import { useRef, useState } from 'react';

const HomePage = () => {
  useTitle('Trang chủ');
  const inputRef = useRef<HTMLInputElement>(null);
  const { upload, progress, status } = useChunkedUpload({
    chunkSize: 2 * 1024 * 1024,
    concurrency: 4,
  });
  const [uploadId] = useState(() => Math.random().toString(36).substring(2));

  const handleUpload = () => {
    const file = inputRef.current?.files?.[0];
    if (!file) return;
    upload(file, uploadId);
  };

  return (
    <div>
      <input type="file" ref={inputRef} />
      <button onClick={handleUpload}>Upload</button>
      <div>Progress: {progress}%</div>
      <div>Status: {status}</div>
    </div>
  );
};

export default HomePage;
