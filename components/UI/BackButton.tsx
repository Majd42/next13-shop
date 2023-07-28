'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'

const BackButton = () => {

  const router = useRouter()
  
  return (
    <Link href={'#'} >
        <BsArrowLeft className='text-xl mb-1' onClick={() => router.back()} />
    </Link>
  )
}

export default BackButton