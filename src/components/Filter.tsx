import { Accordion } from './Accordion';
import { NameFilter } from './NameFilter';
import { QualityFilter } from './QualityFilter';

export const Filter = () => {
  return (
    <div className="hidden rounded-lg bg-gray-100 p-4 lg:block">
      <h2 className="mb-4 font-semibold">Filter Results</h2>
      <hr />
      <Accordion title="Hotel Name">
        <NameFilter />
      </Accordion>
      <hr />
      <Accordion title="Quality Rating">
        <QualityFilter />
      </Accordion>
    </div>
  );
};
