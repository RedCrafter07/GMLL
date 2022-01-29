#!/bin/node
import { wrapper, init, instance } from "gmll";
import { setRoot } from "gmll/config";
import { installForge } from "gmll/handler";


import { fastLaunch } from "msmc";

setRoot(".MC")
await init();
installForge();

const token = wrapper.msmc2token(await fastLaunch("raw", console.log));

const i = new instance({ version: "b1.8" });
i.save();
i.launch(token);


