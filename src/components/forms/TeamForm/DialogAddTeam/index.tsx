import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { teamFormSchema } from '@/lib/form-schema';
import { PlusIcon } from 'lucide-react';
import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface DialogAddTeamProps {}

const DialogAddTeam: FC<DialogAddTeamProps> = ({ }) => {
  const form = useForm<z.infer<typeof teamFormSchema>>
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <PlusIcon className="h-4 w-4 mr-2"/>
            Add member
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogAddTeam;
