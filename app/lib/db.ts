import { PrismaClient } from "@prisma/client";

const prismamclientsingleton = () => {
  return new PrismaClient();
}

declare global {
  var prisma :undefined | ReturnType<typeof prismamclientsingleton>
}

const prisma = globalThis.prisma ?? prismamclientsingleton();

if ( process.env.DATABASE_URL !== "production" ) globalThis.prisma = prisma;  
export default prisma;