import { ReflectionService } from '@grpc/reflection';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { HealthImplementation, protoPath as healthCheckProtoPath } from 'grpc-health-check';
import { join } from 'path';
import { BLOG_PACKAGE_NAME } from './blog/interfaces/blog.interface';

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: BLOG_PACKAGE_NAME,
    protoPath: [healthCheckProtoPath, join(__dirname, './blog/blog.proto')],
    onLoadPackageDefinition: (pkg, server) => {
      const reflection = new ReflectionService(pkg);
      reflection.addToServer(server);

      const healthImpl = new HealthImplementation({
        '': 'UNKNOWN',
      });
      healthImpl.addToServer(server);
      healthImpl.setStatus('', 'SERVING')
    },
  },
};
