import ButtonActionTable from '@/components/organisms/ButtonActionTable';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from '@/constants';
import { MoreVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'
import prisma from '../../../../lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Job } from '@prisma/client';
import { dateformat } from '@/lib/utils';
import moment from 'moment';

interface JobListingsPageProps {

}

async function getDataJobs () {

  const session = await getServerSession(authOptions)

  const jobs = prisma.job.findMany({
    where: {
      companyId: session?.user.id
    }
  })
  
  return jobs;
  
}

const JobListingsPage: FC<JobListingsPageProps> = async ({ })=> {
  const jobs = await getDataJobs()

  console.log(jobs)
  return (
    <div>
      <div className="font-semibold text-3xl">Job Listings</div>

      <div className="mt-10">
        <Table>
          <TableHeader>
            <TableRow>
              {JOB_LISTING_COLUMNS.map((item: string, i: number) => (
                <TableHead key={item + i}>{item}</TableHead>
              ))}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((item: Job, i: number) => (
              <TableRow key={item.roles + 1}>
                <TableCell>
                  {item.roles}
                </TableCell>
                <TableCell>
                  {moment(item.datePosted).isBefore(item.dueDate) ? (
                    <Badge>Live</Badge>
                  ) : (
                    <Badge variant="destructive">Expired</Badge>
                  )}
                </TableCell>
                <TableCell>{dateformat(item.datePosted)}</TableCell>
                <TableCell>{dateformat(item.dueDate)}</TableCell>
                <TableCell>
                  <Badge variant="outline">{item.jobType}</Badge>
                </TableCell>
                <TableCell>{item.applicants}</TableCell>
                <TableCell>{item.applicants} / {item.needs}</TableCell>
                <TableCell>
                  <ButtonActionTable url={`/job-detail/${item.id}`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    </div>
  )
}

export default JobListingsPage;