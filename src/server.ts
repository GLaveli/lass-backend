import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import { router } from './routes';

config();

const PORT = process.env.APPLICATION_PORT_PROVIDER || 3001;
const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/api", router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({ error: "JSON inválido" });
  }
  next();
});

app.listen(PORT, () => {
  console.info(`
    Lass Location Server started at port ${PORT}
   --> made with ♥ by Laveli
   `);
});