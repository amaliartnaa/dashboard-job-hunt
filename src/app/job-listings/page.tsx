import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from '@/constants';
import { MoreVertical } from 'lucide-react';
import React, { FC } from 'react'

interface JobListingsPageProps {

}

const JobListingsPage: FC<JobListingsPageProps> = ({ })=> {
  return (
    <div>
      <div className="font-semibold text-3xl">Job Listings</div>

      <div className="mt-10">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_LISTING_COLUMNS.map((item: string, i: number) => (
                <TableHead key={item + i}>{item}</TableHead>
              ))}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {JOB_LISTING_DATA.map((item: any, i: number) => (
              <TableRow key={item.roles + 1}>
                <TableCell>
                  {item.roles}
                </TableCell>
                <TableCell>
                  <Badge>{item.status}</Badge>
                </TableCell>
                <TableCell>{item.datePosted}</TableCell>
                <TableCell>{item.dueDate}</TableCell>
                <TableCell>
                  <Badge variant="outline">{item.jobType}</Badge>
                </TableCell>
                <TableCell>{item.applicants}</TableCell>
                <TableCell>{item.applicants} / {item.needs}</TableCell>
                <TableCell>
                  <Button size="icon" variant="outline">
                    <MoreVertical className="w-4 h-4"/>
                  </Button>
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