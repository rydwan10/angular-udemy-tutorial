import { Injectable } from '@angular/core';

@Injectable()
export class ServersService {
  servers = [
    { id: 1, name: 'Test Server', status: 'offline' },
    { id: 2, name: 'Administrator Server', status: 'online' },
    { id: 3, name: 'Local Dev Server', status: 'unknown' },
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find((s) => s.id === id);
    return server;
  }

  updateServer(id: number, serverData: { name: string; status: string }) {
    const server = this.servers.find((s) => s.id === id);
    if (server) {
      server.name = serverData.name;
      server.status = serverData.status;
    }
  }
}
