import { Excel } from './components/excel/Excel.js';
import { Formula } from './components/formula/Formula.js';
import { Header } from './components/header/Header.js';
import { Table } from './components/table/Table.js';
import { Toolbar } from './components/toolbar/Toolbar.js';
import './module.js';
import './scss/index.scss';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
});

excel.render()

