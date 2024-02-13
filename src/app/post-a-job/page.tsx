"use client"

import { jobFormSchema } from '@/lib/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Separator } from '@/components/ui/separator'
import { ArrowLeftIcon } from 'lucide-react'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import FieldInput from '@/components/organisms/FieldInput'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

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
            <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
                <ArrowLeftIcon className="w-7 h-7"/>
                <span className="text-2xl font-semibold">Post a Job</span>
            </div>

            <div className="my-5">
                <div className="text-lg font-semibold">Basic Information</div>
                <div className="text-gray-400">
                    List out your top perks and benefits
                </div>
            </div>

            <Separator />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-6 pt-6">
                    <FieldInput title="Job Title" subtitle="Job titles must be describe one position">
                        <FormField
                            control={form.control}
                            name="roles"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            className="w-[450px]"
                                            placeholder="e.g. Software Engineer" 
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </FieldInput>
                </form>
            </Form>
        </div>
    )
}

export default PostJobPage