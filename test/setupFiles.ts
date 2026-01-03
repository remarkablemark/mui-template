// https://github.com/remix-run/react-router/issues/12363
import { TextEncoder } from 'node:util';

global.TextEncoder = TextEncoder as typeof global.TextEncoder;
