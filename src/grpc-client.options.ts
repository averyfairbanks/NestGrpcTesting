import { ReflectionService } from '@grpc/reflection';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { BLOG_PACKAGE_NAME } from './blog/interfaces/blog';
import { HealthImplementation } from 'grpc-health-check';

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: BLOG_PACKAGE_NAME,
    protoPath: join(__dirname, './blog/blog.proto'),
    onLoadPackageDefinition: (pkg, server) => {
      const relf = new ReflectionService(pkg);
      relf.addToServer(server);

      const healthImpl = new HealthImplementation({
        '': 'UNKNOWN',
      });
      healthImpl.addToServer(server);
      healthImpl.setStatus('', 'SERVING')
    },
  },
};
