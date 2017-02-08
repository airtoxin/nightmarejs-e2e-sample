/* eslint-disable import/no-extraneous-dependencies */
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import Mocha from 'mocha';
import { resolve } from 'path';
import readdir from 'recursive-readdir';
import config from '../../webpack.test-config.babel.js';

const compilers = webpack(config);

compilers.plugin('done', () => {
  const mocha = new Mocha({
    timeout: 100000, // 100 sec
  });

  readdir(resolve(__dirname, './specs'), (error, files) => {
    if (error) {
      process.exit(1);
    }

    files
      .filter(f => {
        if (process.env.E2E_TARGET) return !!f.match(process.env.E2E_TARGET);
        return true;
      })
      .forEach(f => mocha.addFile(f));
    mocha.run(process.exit);
  });
});

// prepare server that accessed from Nightmare browser
const server = new WebpackDevServer(compilers, config.devServer);
server.listen(config.devServer.port || 9999, config.devServer.host || 'localhost');
