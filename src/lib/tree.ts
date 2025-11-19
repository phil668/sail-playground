export interface TreeNode {
  id: string
  children?: TreeNode[]
}

/**
 * 在树中递归查找指定id的节点
 * @param nodes 节点数组
 * @param targetId 目标id
 * @returns 找到的节点或null
 */
export function findNodeById<T extends TreeNode>(nodes: T[], targetId: string): T | null {
  for (const node of nodes) {
    // 检查当前节点
    if (node.id === targetId) {
      return node
    }

    // 递归查找子节点
    if (node.children && node.children.length > 0) {
      const found = findNodeById(node.children as T[], targetId)
      if (found) {
        return found
      }
    }
  }
  return null
}
