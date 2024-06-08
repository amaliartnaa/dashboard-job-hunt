import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { JOB_APPLICANTS_COLUMNS, JOB_APPLICANTS_DATA } from '@/constants';
import React, { FC } from 'react'
import ButtonActionTable from '../ButtonActionTable';

interface ApplicantsProps {
  applicants: any
}

const Applicants: FC<ApplicantsProps> = ({applicants}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANTS_COLUMNS.map((item: string, i: number) => (
            <TableHead key={item + i}>{item}</TableHead>
          ))}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicants && (
          <>
          {applicants.map((item: any, i: number) => (
            <TableRow key={item.id + i}>
              <TableCell>{item.user.name}</TableCell>
              <TableCell>
                <ButtonActionTable url="" />
              </TableCell>
            </TableRow>
          ))}
          </>
        )}
      </TableBody>
    </Table>
  )
}

export default Applicants;