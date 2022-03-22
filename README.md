# yargs sequelize mysql

Please complete Assessment [GH9] 'Yargs CLI w/MySQL' prepared by Andy Bolton: Task:

• Build a CLI that allows users to add movies to a
MySQL DB.

• MySQL DB must have more than 1 table with
Primary Key/Foreign Key relationships.

• All CRUD operations must be covered.

Stretch goal - Add a User table that is connected
to movie entries to indicate who added the
movie.

```zsh
node src/app.js --add --title "Last Film just before the next" --actor Junior
node src/app.js --add --title "Last Film before the next" --actor Junior
node src/app.js --add --title "Last Film" --actor Tom --director Junior
node src/app.js --list
node src/app.js --list --key actor --value Junior
node src/app.js --list --key actor --value Junior
node src/app.js --list --key actor --value Tom
node src/app.js --delete --key actor --value Tom
node src/app.js --list
node src/app.js --add --title "Last Film" --actor Tom
node src/app.js --update --newActor Tom --oldActor Junior
node src/app.js --list --key actor --value Junior
node src/app.js --list --key actor --value Tom
```
# gh9_Yargs_SQL_mySQL
