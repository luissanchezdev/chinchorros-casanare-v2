import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server'
import { getRouter } from './router'

const fetch = createStartHandler(defaultStreamHandler)

function createServerEntry(entry: { fetch: typeof fetch }) {
  return {
    async fetch(...args: Parameters<typeof fetch>) {
      return await entry.fetch(...args)
    },
  }
}

export default createServerEntry({ fetch })