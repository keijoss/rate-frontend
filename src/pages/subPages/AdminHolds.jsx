import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminHolds() {
  return (
    <div className='space-y-5'>
      <div>
        <Table className="bg-[#1B2730] rounded-lg">
          <TableCaption>
            <h1 className="font-bold text-white">Teacher</h1>
          </TableCaption>
          <TableHeader className="py-4">
            <TableRow className="text-left font-semibold ">
              <TableHead className="text-white py-3">No</TableHead>
              <TableHead className="text-white py-3">Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-white text-xs">INV001</TableCell>
              <TableCell className="text-white text-xs"> Paid</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <Table className="bg-[#1B2730] rounded-lg">
          <TableCaption>
            <h1 className="font-bold text-white">Subject</h1>
          </TableCaption>
          <TableHeader className="py-4">
            <TableRow className="text-left font-semibold ">
              <TableHead className="text-white py-3">No</TableHead>
              <TableHead className="text-white py-3">Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-white text-xs">INV001</TableCell>
              <TableCell className="text-white text-xs"> Paid</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <Table className="bg-[#1B2730] rounded-lg">
          <TableCaption>
            <h1 className="font-bold text-white">Student</h1>
          </TableCaption>
          <TableHeader className="py-4">
            <TableRow className="text-left font-semibold ">
              <TableHead className="text-white py-3">No</TableHead>
              <TableHead className="text-white py-3">Student Id</TableHead>
              <TableHead className="text-white py-3">Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-white text-xs">INV001</TableCell>
              <TableCell className="text-white text-xs"> Paid</TableCell>
              <TableCell className="text-white text-xs">Credit Card</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <Table className="bg-[#1B2730] rounded-lg">
          <TableCaption>
            <h1 className="font-bold text-white">Assigned teacher to a Subject</h1>
          </TableCaption>
          <TableHeader className="py-4">
            <TableRow className="text-left font-semibold ">
              <TableHead className="text-white py-3">No</TableHead>
              <TableHead className="text-white py-3">Subject Name</TableHead>
              <TableHead className="text-white py-3">Teacher Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-white text-xs">INV001</TableCell>
              <TableCell className="text-white text-xs"> Paid</TableCell>
              <TableCell className="text-white text-xs">Credit Card</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <Table className="bg-[#1B2730] rounded-lg">
          <TableCaption>
            <h1 className="font-bold text-white">Enrolled Student to a particular course</h1>
          </TableCaption>
          <TableHeader className="py-4">
            <TableRow className="text-left font-semibold ">
              <TableHead className="text-white py-3">No</TableHead>
              <TableHead className="text-white py-3">Student Name</TableHead>
              <TableHead className="text-white py-3">Subject Name</TableHead>
              <TableHead className="text-white py-3">Teacher Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-white text-xs">INV001</TableCell>
              <TableCell className="text-white text-xs"> Paid</TableCell>
              <TableCell className="text-white text-xs">Credit Card</TableCell>
              <TableCell className="text-white text-xs">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
