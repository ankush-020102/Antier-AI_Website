import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // ✅ Allow requests from your Vite frontend (localhost:5173)
   app.enableCors({
    origin: 'http://localhost:5174',
    credentials: true, 
  });
  await app.listen(PORT).then(() => {
    console.log("Server running at "+PORT)
  });
}
bootstrap();