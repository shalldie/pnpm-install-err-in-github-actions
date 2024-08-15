#!/bin/bash

set -e

BASE_PATH=$(
    cd $(dirname $0)/..
    pwd
)

cd $BASE_PATH

rm -rf output
mkdir output

function deploy_blog() {
    # install
    cd $BASE_PATH
    pnpm i
    pnpm build

    # deploy
    pnpm --filter="@blog/nest-server" --prod deploy ./output/packages/server
    pnpm --filter="@blog/next-client" --prod deploy ./output/packages/client

}

deploy_blog
