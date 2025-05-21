import express, {Express} from 'express';
import { PrismaClient } from '../generated/prisma';
import { errorMiddleware } from './middlewares/errors';

import { PORT } from './secrets';
import rootRouter from './routes';

const app: Express = express()

app.use(express.json())

app.use('/api', rootRouter)

export const prismaClient = new PrismaClient({
    log: ['query']
})

app.use(errorMiddleware)

app.listen(PORT, () => {console.log("Server running on port 3000!")})