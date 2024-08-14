const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log error stack to the console for debugging
  
    res.status(err.status || 500).json({
      success: false,
      message: err.message || 'Server Error',
    });
  };
  
  module.exports = errorHandler;
  