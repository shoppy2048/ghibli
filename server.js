const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// 添加图像生成模拟端点
server.post('/generate-image', (req, res) => {
  // 随机选择一个示例图片URL
  const sampleImages = [
    'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800',
    'https://images.unsplash.com/photo-1566618501825-baffef30508b?w=800',
    'https://images.unsplash.com/photo-1504198266287-1659872e6590?w=800'
  ];
  
  const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
  
  setTimeout(() => {
    res.jsonp({
      success: true,
      imageUrl: randomImage
    });
  }, 1500); // 添加延迟模拟生成过程
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});