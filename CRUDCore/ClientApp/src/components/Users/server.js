app.get('/', function (req, res) {
    connection.query('select * from user', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });