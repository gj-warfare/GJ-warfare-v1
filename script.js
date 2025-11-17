function downloadVersion() {
  const select = document.getElementById("download-select");
  const version = select.value;

  if (!version) {
    alert("Please select a version to download.");
    return;
  }

  // Redirect to version-specific file
  if (version === "v1.0") {
    window.location.href = "downloads/version1.zip";
  } else if (version === "v2.0") {
    window.location.href = "downloads/version2.zip";
  } else if (version === "v3.0") {
    window.location.href = "downloads/version3.zip";
  }
}
