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
import useQueryTeachers from '@/hooks/Queries/useQueryTeachers';
import useTeachers from '@/hooks/Store/useTeachers';
import { Delete, DeleteIcon, Edit, Edit2, LucideDelete, Minus } from 'lucide-react';
import useSubjectTeacher from '@/hooks/Store/useSubjectTeacher';
import useQueryAllSubjects from '@/hooks/Queries/useQueryAllSubjects';
import useAllSubjec from '@/hooks/Store/useAllSubjects';
import useQueryStudents from '@/hooks/Queries/useQueryStudents';
import usestudentss from '@/hooks/Store/useStudents';
import useQuerySubjectTeacher from '@/hooks/Queries/useQuerySubjectTeacher';
import useQueryEnrollledCourses from '@/hooks/Queries/useQueryEnrollledCourses';
import useenrolledCourseds from '@/hooks/Store/useEnrolledCoursed';

export default function AdminHolds() {

  useQueryTeachers();
  useQueryAllSubjects();
  useQueryStudents()
  useQuerySubjectTeacher()
  useQueryEnrollledCourses()

  const teachers = useTeachers((state) => state.teacher);
  const subjects = useAllSubjec((state) => state.subjects);
  const students = usestudentss((state) => state.students);
  const subjectteacher = useSubjectTeacher((state) => state.subjectTeacher);
  const enrolledCoursed = useenrolledCourseds((state) => state.enrolledCoursed);

  return (
    <div className="space-y-5">
      <div>
        <Table className="bg-[#1B2730] rounded-lg">
          <TableCaption>
            <h1 className="font-bold text-white">Teacher</h1>
          </TableCaption>
          <TableHeader>
            <TableRow className="text-left font-semibold ">
              <TableHead className="text-white py-3">No</TableHead>
              <TableHead className="text-white py-3">Name</TableHead>
              <TableHead className="text-white py-3">Email</TableHead>
              <TableHead className="text-white py-3">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teachers.map((teacher, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="text-white text-xs">{index}</TableCell>
                  <TableCell className="text-white text-xs">
                    {teacher.name}
                  </TableCell>
                  <TableCell className="text-white text-xs">
                    {teacher.email}
                  </TableCell>
                  <TableCell className="text-white text-xs">
                    <div className="flex gap-2">
                      <Edit size={17} />
                      <Minus color="red" size={17} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
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

              <TableHead className="text-white py-3">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map((subject, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="text-white text-xs">{index}</TableCell>
                  <TableCell className="text-white text-xs">
                    {subject.subject}
                  </TableCell>
                  <TableCell className="text-white text-xs">
                    <div className="flex gap-2">
                      <Edit size={17} />
                      <Minus color="red" size={17} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
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
              <TableHead className="text-white py-3">Email</TableHead>
              <TableHead className="text-white py-3">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{
            students.map((student, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="text-white text-xs">{index}</TableCell>
                  <TableCell className="text-white text-xs">
                    {student.student_id}
                  </TableCell>
                  <TableCell className="text-white text-xs">
                    {student.name}
                  </TableCell>
                  <TableCell className="text-white text-xs">
                    {student.email}
                  </TableCell>
                  <TableCell className="text-white text-xs">
                    <div className="flex gap-2">
                      <Edit size={17} />
                      <Minus color="red" size={17} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
          }
          </TableBody>
        </Table>
      </div>
      <div>
        <Table className="bg-[#1B2730] rounded-lg">
          <TableCaption>
            <h1 className="font-bold text-white">
              Assigned teacher to a Subject
            </h1>
          </TableCaption>
          <TableHeader className="py-4">
            <TableRow className="text-left font-semibold ">
              <TableHead className="text-white py-3">No</TableHead>
              <TableHead className="text-white py-3">Subject Name</TableHead>
              <TableHead className="text-white py-3">Teacher Name</TableHead>
              <TableHead className="text-white py-3">Action</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>{
            subjectteacher.map((subject, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="text-white text-xs">{index}</TableCell>
                  <TableCell className="text-white text-xs">
                    {subject.subject}
                  </TableCell>
                  <TableCell className="text-white text-xs">
                    {subject.teacher_name}
                  </TableCell>
                  <TableCell className="text-white text-xs">
                    <div className="flex gap-2">
                      <Edit size={17} />
                      <Minus color="red" size={17} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })
            }
          </TableBody>
        </Table>
      </div>
      <div>
        <Table className="bg-[#1B2730] rounded-lg">
          <TableCaption>
            <h1 className="font-bold text-white">
              Enrolled Student to a particular course
            </h1>
          </TableCaption>
          <TableHeader className="py-4">
            <TableRow className="text-left font-semibold ">
              <TableHead className="text-white py-3">No</TableHead>
              <TableHead className="text-white py-3">Student Name</TableHead>
              <TableHead className="text-white py-3">Subject Name</TableHead>
              <TableHead className="text-white py-3">Teacher Name</TableHead>
              <TableHead className="text-white py-3">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              enrolledCoursed.map((enrolled, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="text-white text-xs">{index}</TableCell>
                    <TableCell className="text-white text-xs">
                      {enrolled.student}
                    </TableCell>
                    <TableCell className="text-white text-xs">
                      {enrolled.subject}
                    </TableCell>
                    <TableCell className="text-white text-xs">
                      {enrolled.teacher}
                    </TableCell>
                    <TableCell className="text-white text-xs">
                      <div className="flex gap-2">
                        <Edit size={17} />
                        <Minus color="red" size={17} />
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
