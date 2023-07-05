import { Summarry } from "../summary/Summary";
import { Container } from "./styles";


interface DashboardProps {

}
export function Dashboard(props : DashboardProps){
    return(
        <Container>
          <Summarry/>
        </Container>
    )
}