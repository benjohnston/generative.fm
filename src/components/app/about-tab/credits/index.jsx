import React from 'react';
import './credits.scss';

const supporters = [
  'theunis',
  'Lisa Sieverts',
  'Casper Lourens',
  'James',
  'Anton Mironov',
  'Romain',
  'Price Comstock',
  'Bruz Marzolf',
  'Laurent Baumann',
  'Matthew William Whisennand',
  'Dan Carr',
  'Stephen Turner',
  'Lorenzo Burgio',
  'Tim Van Damme',
  'Michael Gehrmann',
  'Martin Stubbs',
  'Oleksandr Bugor',
  'Zarremgregarrok',
  'Catherine Desrochers',
  'Douglas Fils',
  'Christian Benstein',
  'John',
];
const majorSupporters = [
  'Brian Fountain',
  'Mike Smith',
  'Christian DeWolf',
  'Sam Roelants',
];

const Credits = () => (
  <div className="credits">
    Thank you to the incredible Patrons who keep this project going:
    <div className="credits__supporters">
      {majorSupporters.map(name => (
        <div key={name} className="credits__name credits__name--major">
          {name}
        </div>
      ))}
    </div>
    <div className="credits__supporters">
      {supporters.map(name => (
        <div key={name} className="credits__name">
          {name}
        </div>
      ))}
    </div>
  </div>
);

export default Credits;
