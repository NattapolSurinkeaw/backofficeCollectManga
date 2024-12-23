/* eslint-disable */
import EditMember from "./EditMember";
import DeleteMember from "./DeleteMember";

export default function PaymentsTable ({ booksPerPage, getBookAll, setPage }) {
  return (
    <>
      <table className="w-full text-left text-gray-500 font-bold">
        <thead className="text-gray-700 bg-gray-100">
          <tr>
            <th scope="col" className="p-4">
              ลำดับ
            </th>
            <th scope="col" className="p-4">
              รูปภาพ
            </th>
            <th scope="col" className="p-4">
              ราคา
            </th>
            <th scope="col" className="p-4">
              จำนวนเล่ม
            </th>
            <th scope="col" className="p-4">
              ขนส่ง
            </th>
            <th scope="col" className="p-4">
              วันที่สั่ง
            </th>
            <th align="center" scope="col" className="p-4">
              ตัวเลือก
            </th>
          </tr>
        </thead>
        <tbody>
          {booksPerPage &&
            booksPerPage.map((payment) => (
              <tr key={payment.id} className="bg-white border-b">
                <th className="p-4">{payment.id}</th>
                <td className="p-4">
                  <img
                    className="w-full max-w-[100px] h-[100px] rounded-md"
                    // src={`http://localhost:8000/storage/members/images/${member.image_slip}`}
                    src={`${payment.image_slip}`}
                    alt={payment.name}
                  />
                </td>
                <td className="p-4">{payment.price}</td>
                <td className="p-4">{payment.quantity}</td>
                <td className="p-4">{payment.transport}</td>
                <td className="p-4">{payment.created_at}</td>
                <td className="p-4">
                  <div className="h-full flex justify-center items-center gap-4">
                    {/* <EditMember getMembers={getMembers} member={member} /> */}
                    {/* <DeleteMember getMembers={getMembers} member={member} setPage={setPage} /> */}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

