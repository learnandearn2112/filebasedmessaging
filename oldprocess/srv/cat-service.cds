using {demo} from '../db/data-model';

@path : 'service/demo'
service DemoService {

    entity Departments as select from demo.Departments;

    entity Employees as select from demo.Employees;

}