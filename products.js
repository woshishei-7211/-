// 产品资料集中在这里维护。复制一个对象并修改内容，即可添加产品。
// 下载文件放在 downloads/ 目录，download 字段填写相对路径。
window.PRODUCTS = [
  {
    id: "sample-tool",
    name: "示例产品 A",
    category: "示例分类",
    summary: "这里填写一句简短的产品介绍，说明它能解决什么问题。",
    description: "这是产品详情介绍的占位内容。你可以介绍产品用途、设计理念，以及用户如何开始使用。",
    features: ["功能亮点一：替换为实际功能说明", "功能亮点二：说明适用场景", "功能亮点三：补充使用优势"],
    useCases: "适合在这里描述产品适用的人群、工作流程或使用场景。",
    version: "示例版本 1.0",
    download: "downloads/readme-example.txt",
    downloadLabel: "下载示例说明文件",
    fileType: "TXT · 示例文件",
    color: "peach",
    symbol: "✳"
  },
  {
    id: "sample-kit",
    name: "示例产品 B",
    category: "示例分类",
    summary: "产品卡片的示例内容，可替换成你的第二个产品。",
    description: "在这里补充完整的产品介绍。产品卡片和详情窗口会自动读取 products.js 中的内容。",
    features: ["描述核心功能", "说明与其他产品的区别", "补充版本或兼容信息"],
    useCases: "用简洁的文字讲清楚用户什么时候会需要这个产品。",
    version: "示例版本 1.0",
    download: "downloads/readme-example.txt",
    downloadLabel: "下载示例说明文件",
    fileType: "TXT · 示例文件",
    color: "lavender",
    symbol: "◈"
  },
  {
    id: "sample-resource",
    name: "示例资源包",
    category: "资料与资源",
    summary: "也可以展示文档、模板或其他可下载的产品资源。",
    description: "资源类内容同样可以用产品详情结构介绍，列出资源用途、包含内容和下载方式。",
    features: ["介绍资源包含的内容", "说明文件格式", "提供更新或使用说明"],
    useCases: "适合发布说明文档、模板、素材包或产品配套文件。",
    version: "示例版本 1.0",
    download: "downloads/readme-example.txt",
    downloadLabel: "下载示例说明文件",
    fileType: "TXT · 示例文件",
    color: "mint",
    symbol: "⌘"
  }
];
