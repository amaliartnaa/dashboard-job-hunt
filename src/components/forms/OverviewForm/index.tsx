"use client"

import TitleForm from '@/components/atoms/TitleForm'
import { overviewFormSchema } from '@/lib/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Separator } from '@radix-ui/react-separator'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface OverviewFormProps {

}

const OverviewForm: FC<OverviewFormProps> = ({ }) => {
  const form = useForm<z.infer<typeof overviewFormSchema>>({
    resolver: zodResolver(overviewFormSchema),
  })

  const onSubmit = (val: z.infer<typeof overviewFormSchema>) => {
    console.log(val)
  }
  return (
    <div>
      <div>
        <div className="my-5">
          <TitleForm title="Basic Information" subtitle="This is company information that you can update anytime" />
        </div>
      </div>

      <Separator />
    </div>
  )
}

export default OverviewForm
