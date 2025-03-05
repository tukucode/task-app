'use client' // Error boundaries must be Client Components

import NextError from 'next/error'

type ErrorProps = {
  error: Error & { digest?: string }
}

export default function Error({ error }: ErrorProps) {
  return (
    <NextError statusCode={500} title={error.message} />
  )
}
