# clean_app_props.py
import re
from git_filter_repo import Blob

class Callback:
    def __init__(self):
        pass

    def blob_callback(self, blob: Blob):
        # Check if the current blob (file) is application.properties
        # Adjust this path if your application.properties is not in src/main/resources/
        if blob.original_path == b'src/main/resources/application.properties':
            content = blob.data.decode('utf-8')

            # Regex to find and replace lines containing username and password
            # This will replace the entire line with a placeholder.
            # Adjust the regex if your property names are different.
            content = re.sub(r'^spring\.datasource\.username=.*$', 'spring.datasource.username=REMOVED_FROM_HISTORY', content, flags=re.MULTILINE)
            content = re.sub(r'^spring\.datasource\.password=.*$', 'spring.datasource.password=REMOVED_FROM_HISTORY', content, flags=re.MULTILINE)

            # If you have other sensitive properties, add more re.sub lines here.
            blob.data = content.encode('utf-8')
        return blob

# This is the entry point that git-filter-repo will look for
callback = Callback()