function downloadFile() {
  const dropdown = document.getElementById("fileDropdown");
  const selectedFile = dropdown.value;

  if (selectedFile) {
    // Trigger download (replace with actual file paths)
    window.location.href = selectedFile;
  } else {
    alert("Please select a file first!");
  }
}
