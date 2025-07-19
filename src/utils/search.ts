import type { Route } from "@/types/route";

// giải thuật BFS 
export const findPath = (menu: Route[], targetKey: string): string[] | null => {
    const queue: { node: any, path: string[] }[] = [];

    for (const item of menu) {
        queue.push({ node: item, path: [item.path] });
    }

    while (queue.length > 0) {
        const { node, path } = queue.shift()!;
        if (node.key === targetKey) {
            return path;
        }
        if (node.children) {
            for (const child of node.children) {
                queue.push({ node: child, path: [...path, child.path] });
            }
        }
    }

    return null;
};