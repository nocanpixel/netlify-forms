exports.handler = async (event) => {
    const formData = JSON.parse(event.body);
    // Process the form data and perform any necessary actions
    // e.g., send an email, save to a database, etc.
    console.log(formData);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!' }),
    };
  };