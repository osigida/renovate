import {
  ExecOptions as ChildProcessExecOptions,
  exec as cpExec,
} from 'child_process';
import { promisify } from 'util';

export type Opt<T> = T | null | undefined;

export type VolumesPair = [string, string];
export type VolumeOption = Opt<string | VolumesPair>;

export type DockerExtraCommand = Opt<string>;
export type DockerExtraCommands = Opt<DockerExtraCommand[]>;

export interface DockerOptions {
  image: string;
  tag?: Opt<string>;
  tagScheme?: Opt<string>;
  tagConstraint?: Opt<string>;
  volumes?: Opt<VolumeOption[]>;
  envVars?: Opt<Opt<string>[]>;
  cwd?: Opt<string>;
}

export interface RawExecOptions extends ChildProcessExecOptions {
  encoding: string;
}

export interface ExecResult {
  stdout: string;
  stderr: string;
}

export const rawExec: (
  cmd: string,
  opts: RawExecOptions
) => Promise<ExecResult> = promisify(cpExec);
