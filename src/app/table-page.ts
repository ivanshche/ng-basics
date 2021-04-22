export class TablePage {
  public totalCount: number;
  public rows: Array<any>;
  constructor(totalCount: number, rows: Array<any>) {
    this.totalCount = totalCount;
    this.rows = rows;
    console.log('this.totalCount ' + this.totalCount);
    console.log('this.rows ' + this.rows.length);

  }
}
