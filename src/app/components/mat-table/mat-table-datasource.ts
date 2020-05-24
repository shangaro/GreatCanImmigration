import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { MatTableItem } from 'src/app/shared/models';



// TODO: replace this with real data from your application
const EXAMPLE_DATA: MatTableItem[] = [
  {id: 1, standard: 'Language ',points:28},
  {id: 2, standard: 'Education',points:25},
  {id: 3, standard: 'Work experience',points:15},
  {id: 4, standard: 'Age',points:12},
  {id: 5, standard: 'Arranged employment in Canada',points:10},
  {id: 6, standard: 'Adaptability',points:10},
  {id: 7, standard: 'Total Points',points:100},
  
];

/**
 * Data source for the MatTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MatTableDataSource extends DataSource<MatTableItem> {
  data: MatTableItem[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(matTableItems:MatTableItem[]) {
    super();
    this.data=matTableItems;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MatTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MatTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MatTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'standard': return compare(a.standard, b.standard, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'points': return compare(+a.points,+b.points, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
