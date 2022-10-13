import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import AddchartIcon from "@mui/icons-material/Addchart";
function createData(name: string, description: string) {
  return { name, description };
}

const rows = [
  createData("Google Project Apply Review", "Complete In 3 Hours"),
  createData("Recruitment In IT Depertment", "Complete In 2 Days"),
  createData("Business Project Research", "Complete In 3 Hours"),
  createData("Submit Riverfront Project", "Due In 1 Hour"),
  createData("Google Project Apply Review", "Complete In 3 Hours"),
];

export default function Todaysheet() {
  return (
    <>
      <div className="todaydatasec8">
        <TableContainer>
          <Table sx={{ minWidth: 357 }} aria-label="simple table">
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    <AddchartIcon />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <h2>{row.name} </h2>

                    <h5> {row.description} </h5>
                  </TableCell>
                  <TableCell component="th" scope="row" className="editdltlink">
                    <span>edit</span>
                    <span>delete</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
