import { jobFormSchema } from '@/lib/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface PostJobProps {}

const PostJobPage: FC<PostJobProps> = ({ }) => {
    const form = useForm<z.infer<typeof jobFormSchema>>({
        resolver: zodResolver(jobFormSchema),
        defaultValues: {
            requiredSkills: []
        }
    })

    const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
        console.log(val);
    }

    return (
        <div className="">
            hai
        </div>
    )
}

export default PostJobPage