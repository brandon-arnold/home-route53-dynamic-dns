import * as fs from 'fs';

export async function readFile(filename: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }

    });
  });
}

export async function writeFile(filename: string, contents: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    fs.writeFile(filename, contents, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export async function deleteFile(filename: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    fs.unlink(filename, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export async function fileExists(filename: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    fs.exists(filename, (exists) => {
      resolve(exists);
    });
  });
}
