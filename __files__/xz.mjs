#!/usr/bin/env zx

import dotenv from 'dotenv';

const envs = dotenv.config();

if (envs.error) {
  throw envs.error;
}

const {
  DEPLOY_RSYNC_USER,
  DEPLOY_RSYNC_HOST,
  DEPLOY_RSYNC_PORT,
  DEPLOY_RSYNC_LOCAL_PATH,
  DEPLOY_RSYNC_REMOTE_PATH,
} = envs.parsed;

await $`rsync -e 'ssh -p ${DEPLOY_RSYNC_PORT}' -r ${DEPLOY_RSYNC_LOCAL_PATH} ${DEPLOY_RSYNC_USER}@${DEPLOY_RSYNC_HOST}:${DEPLOY_RSYNC_REMOTE_PATH} --progress`;
