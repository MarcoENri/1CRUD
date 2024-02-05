import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  
  const ticket1 = await prisma.soporte.upsert({
    where: { title: 'Problema con la conexión' },
    update: {},
    create: {
      title: 'Problema con la conexión',
      description: 'No puedo acceder a la red interna de la empresa.',
      lastSee: 'Batan Shopping',
      countLastSee: 12,
      extinct: false,
    },
  });

  const ticket2 = await prisma.soporte.upsert({
    where: { title: 'Error en la aplicación' },
    update: {},
    create: {
      title: 'Error en la aplicación',
      description: 'La aplicación se cierra inesperadamente.',
      lastSee: 'Mall del Rio',
      countLastSee: 12,
      extinct: false,
    },
  });

  console.log({ ticket1, ticket2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
