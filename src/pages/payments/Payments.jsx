/* eslint-disable */
import { Card, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import PaymentsTable from "./components/PaymentsTable";
import PaymentPagination from "./components/PaymentsPagination";
import CreatePayment from "./components/CreatePayment";
import { svGetPayments } from "../../services/payment.service";

export default function Payments() {
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const filteredMembers = books.filter((book) =>
    book.store_sell.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const booksPerPage = filteredMembers.slice(startIndex, endIndex);

  async function getBookAll() {
    const response = await svGetPayments();
    console.log(response.data.data)
    const allBook = response.data.data;
    setBooks(allBook)
    setTotalPages(Math.ceil(allBook.length / rowsPerPage));
  }

  useEffect(() => {
    getBookAll();
  }, []);

  return (
    <div>
      <p className="text-xl font-bold text-gray-700">Payments</p>
      <Card className="p-4 mt-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <CreatePayment setBooks={setBooks} />
            {/* <MembersSearch
              setPage={setPage}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            /> */}
          </div>
          <div className="relative overflow-x-auto rounded-md">
            <PaymentsTable
              getBookAll={getBookAll}
              booksPerPage={booksPerPage}
              setPage={setPage}
            />
            <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-0 my-4 sm:mb-0">
              <PaymentPagination
                members={members}
                page={page}
                setPage={setPage}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                totalPages={totalPages}
                setTotalPages={setTotalPages}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
