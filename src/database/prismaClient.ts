import { PrismaClient, Prisma } from "@prisma/client";

let prismaClient: PrismaClient;

async function createPrismaClientWithRetry() {

  prismaClient = new PrismaClient();

  const whileStatus = true;

  while (whileStatus) {
    try {

      await prismaClient.$connect();
      console.info({ DBConn: "Conexão bem-sucedida! 👌" });
      break;

    } catch (err) {

      if (err instanceof Prisma.PrismaClientInitializationError) {
        console.error({ DBConn: "Erro na conexão com o banco de dados 😰" });
        console.error((err as Error).message);
      } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        console.error({ DBConn: "Erro ao executar consulta no banco de dados 😰" });
        console.error((err as Error).message);
      } else {
        console.error({ DBConn: "Erro desconhecido 🤬" });
        console.error(err);
      }
      console.info({ DBConn: "tentando reconexão em 5 segundos..." });
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }

  // Monitorar a conexão com o banco de dados a cada 30 segundos
  // setInterval(async () => {
  //   try {
  //     const result = await prismaClient.$queryRaw`SELECT 1`;
  //     console.info({ DBConn: 'Conexão ok. 😎' });
  //   } catch (err) {
  //     console.error({ DBConnecton: 'A conexão foi perdida 😩, tentando reconexão 🤝', error: err });
  //     await prismaClient.$connect();
  //   }
  // }, 30 * 1000);

  return prismaClient;
}

async function main() {
  await createPrismaClientWithRetry();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

export { prismaClient };