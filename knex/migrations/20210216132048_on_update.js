const ON_UPDATE_FUNCTION = `
  CREATE OR REPLACE FUNCTION on_update()
  RETURNS trigger AS $$
  BEGIN
    NEW.updated_at = now();
    RETURN NEW;
  END;
$$ language 'plpgsql';
`

const DROP_ON_UPDATE_FUNCTION = 'DROP FUNCTION on_update'

exports.up = knex => knex.raw(ON_UPDATE_FUNCTION)
exports.down = knex => knex.raw(DROP_ON_UPDATE_FUNCTION)
