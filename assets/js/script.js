// const sidebar = document.getElementById('side-bar');
// const content = document.querySelector('#content');
// const toggle_sidebar = document.querySelector('#sidebar-toggle');

// toggle_sidebar.addEventListener("click", () => {
//     let sidebarWidth = window.getComputedStyle(sidebar).width;
//     if (sidebarWidth === "250px") {
//         sidebar.style.width = "0";
//         content.style.marginRight = "0";
//     } else {
//         sidebar.style.width = "250px";
//         content.style.marginRight = "250px";
//     }
// });

const sidebar = document.getElementById('side-bar');
const content = document.querySelector('#content');
const toggle_sidebar = document.querySelector('#sidebar-toggle');

toggle_sidebar.addEventListener('click', () => {
  let sidebarRight = window.getComputedStyle(sidebar).right;
  if (window.innerWidth > 767) {
    if (sidebarRight === '0px') {
      sidebar.style.right = '-250px';
      content.style.marginRight = '0';
    } else {
      sidebar.style.right = '0';
      content.style.marginRight = '250px';
    }
  } else {
    if (sidebarRight === '0px') {
      sidebar.style.right = '-250px';
    } else {
      sidebar.style.right = '0';
    }
  }
});

// Hide loader when page is fully loaded (simple version)
window.onload = function () {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
};

(function () {
  const icons = document.getElementById('icons');
  if (!icons) return;

  icons.addEventListener('click', function (e) {
    const btn = e.target.closest('.dropdown-icon');
    if (!btn || !icons.contains(btn)) return;

    const menu = btn.querySelector('.icon-dropdown');
    if (!menu) return;

    document.querySelectorAll('.icon-dropdown').forEach(el => {
      if (el !== menu) el.style.display = 'none';
    });

    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown-icon')) {
      document.querySelectorAll('.icon-dropdown').forEach(el => el.style.display = 'none');
    }
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  function updateStatusText() {
    const statusToggle = document.getElementById('publishStatus');
    const statusText = document.getElementById('publishStatusText');

    if (statusToggle && statusText) {
      if (statusToggle.checked) {
        statusText.textContent = 'سيتم النشر';
        statusText.classList.remove('text-muted');
        statusText.classList.add('text-success');
      } else {
        statusText.textContent = 'مسودة';
        statusText.classList.remove('text-success');
        statusText.classList.add('text-muted');
      }
    }
  }

  // Auto-fill data-labels for mobile card tables
  // Works with CSS rules in assets/css/style.css for `.table.table-mobile`
  (function () {
    const tables = document.querySelectorAll('table.table-mobile');
    if (!tables.length) return;

    tables.forEach(table => {
      const headerCells = Array.from(table.querySelectorAll('thead th'));
      const headers = headerCells.map(th => th.textContent.trim());

      // If no thead, abort for this table
      if (!headers.length) return;

      table.querySelectorAll('tbody tr').forEach(row => {
        row.querySelectorAll('td').forEach((td, idx) => {
          if (!td.hasAttribute('data-label') && headers[idx]) {
            td.setAttribute('data-label', headers[idx]);
          }
        });
      });
    });
  })();
});

function setupReportFilters() {
  const filterForm = document.getElementById('reportFilters');
  if (!filterForm) return;

  filterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const timeRange = document.getElementById('timeRange').value;
    const category = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) loadingIndicator.style.display = 'block';

    fetchFilteredData(timeRange, category, sortBy);
  });
}

// Reports Page Initialization
function initReportsPage() {
  // Initialize any report-specific functionality here
  if (typeof setupReportFilters === 'function') {
    setupReportFilters();
  }

  // Initialize any charts or data tables specific to reports
  if (typeof ApexCharts !== 'undefined') {
    // Initialize any charts here if needed
  }
}

// Report Actions
function sendReportByEmail() {
  // Show loading state
  const btn = event.target.closest('button');
  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> جاري الإرسال...';

  // Simulate API call
  setTimeout(() => {
    // Show success message
    const toast = new bootstrap.Toast(document.getElementById('toast'));
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = 'تم إرسال التقرير بنجاح إلى البريد الإلكتروني';
    toast.show();

    // Reset button
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 1500);
}

function exportToPDF() {
  // Show loading state
  const btn = event.target.closest('button');
  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> جاري التصدير...';

  // Simulate PDF generation and download
  setTimeout(() => {
    // Create a dummy link to trigger download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'تقرير-التفاصيل-' + new Date().toISOString().split('T')[0] + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset button
    btn.innerHTML = originalText;
    btn.disabled = false;

    // Show success message
    const toast = new bootstrap.Toast(document.getElementById('toast'));
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = 'تم تصدير التقرير بنجاح';
    toast.show();
  }, 1000);
}

function refreshReport() {
  // Show loading state
  const btn = event.target.closest('button');
  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> جاري التحديث...';

  // Simulate data refresh
  setTimeout(() => {
    // Update the last updated time
    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    document.querySelector('.text-muted').textContent = `آخر تحديث: ${new Intl.DateTimeFormat('ar-EG', options).format(now)}`;

    // Reset button
    btn.innerHTML = originalText;
    btn.disabled = false;

    // Show success message
    const toast = new bootstrap.Toast(document.getElementById('toast'));
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = 'تم تحديث البيانات بنجاح';
    toast.show();
  }, 1200);
}

// Initialize Discounts Page
function initDiscountsPage() {
  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize date inputs with current date/time
  const now = new Date();
  const startDate = document.getElementById('startDate');
  const endDate = document.getElementById('endDate');

  // Format: YYYY-MM-DDThh:mm
  function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  // Set start date to now
  if (startDate) {
    startDate.value = formatDateTime(now);
  }

  // Set end date to 1 month from now
  if (endDate) {
    const oneMonthLater = new Date(now);
    oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
    endDate.value = formatDateTime(oneMonthLater);
  }

  // Handle discount type change to show/hide value field
  const discountType = document.getElementById('discountType');
  if (discountType) {
    discountType.addEventListener('change', function () {
      const valueField = document.getElementById('discountValue');
      const valueAddon = document.getElementById('discountValueAddon');

      if (this.value === 'percentage') {
        valueAddon.textContent = '%';
        valueField.placeholder = '0-100';
        valueField.disabled = false;
      } else if (this.value === 'fixed') {
        valueAddon.textContent = 'ر.س';
        valueField.placeholder = 'المبلغ';
        valueField.disabled = false;
      } else if (this.value === 'free_shipping') {
        valueAddon.textContent = '';
        valueField.value = '0';
        valueField.placeholder = 'غير مطلوب';
        valueField.disabled = true;
      }
    });
  }

  // Handle form submission
  const discountForm = document.getElementById('discountForm');
  if (discountForm) {
    discountForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Here you would typically send the data to your server
      console.log('Form submitted');

      // Show success message
      const toast = new bootstrap.Toast(document.getElementById('toast'));
      const toastMessage = document.getElementById('toastMessage');
      toastMessage.textContent = 'تم حفظ الخصم بنجاح';
      toast.show();

      // Close the modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('addDiscountModal'));
      modal.hide();

      // Reset form
      this.reset();
    });
  }

  // Copy discount code to clipboard
  document.querySelectorAll('.btn-copy').forEach(button => {
    button.addEventListener('click', function () {
      const code = this.getAttribute('data-code');
      navigator.clipboard.writeText(code).then(() => {
        const icon = this.querySelector('i');
        const originalIcon = icon.className;
        icon.className = 'fas fa-check text-success';
        const toastEl = document.getElementById('copyToast');
        const toast = new bootstrap.Toast(toastEl);
        const copiedCodeElement = document.getElementById('copiedCode');
        if (copiedCodeElement) {
          copiedCodeElement.textContent = code;
        }
        toast.show();
        setTimeout(() => {
          icon.className = originalIcon;
        }, 2000);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Existing initialization code...

  // Only initialize reports page if we're on the reports page
  if (document.querySelector('body.reports-page') || window.location.pathname.includes('reports.html')) {
    initReportsPage();
  }

  // Initialize discounts page if we're on the discounts page
  if (document.querySelector('.discounts-page')) {
    initDiscountsPage();
  }
});

// Renewal modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Show/hide custom date range in renewal modal
  const renewalPeriod = document.getElementById('renewalPeriod');
  const customDateRange = document.getElementById('customDateRange');
  
  if (renewalPeriod && customDateRange) {
      renewalPeriod.addEventListener('change', function() {
          customDateRange.style.display = this.value === 'custom' ? 'block' : 'none';
      });
  }

  // Handle form submission for renewal
  const renewalForm = document.getElementById('renewalForm');
  if (renewalForm) {
      renewalForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const period = document.getElementById('renewalPeriod').value;
          let startDate, endDate;
          
          if (period === 'custom') {
              startDate = document.getElementById('startDate').value;
              endDate = document.getElementById('endDate').value;
              
              if (!startDate || !endDate) {
                  showToast('الرجاء تحديد تاريخ البداية والنهاية', 'error');
                  return;
              }
              
              if (new Date(startDate) >= new Date(endDate)) {
                  showToast('يجب أن يكون تاريخ البداية قبل تاريخ النهاية', 'error');
                  return;
              }
          } else {
              // Calculate dates based on selected period
              const today = new Date();
              startDate = today.toISOString().split('T')[0];
              
              const end = new Date(today);
              end.setMonth(end.getMonth() + parseInt(period));
              endDate = end.toISOString().split('T')[0];
          }
          
          // Here you would typically make an AJAX call to your backend
          console.log('Renewing with:', { period, startDate, endDate });
          
          // Show success message
          showToast('تم تجديد كود الخصم بنجاح', 'success');
          
          // Close the modal
          const modal = bootstrap.Modal.getInstance(document.getElementById('renewalModal'));
          modal.hide();
      });
  }
  
  // Helper function to show toast messages
  function showToast(message, type = 'success') {
      const toastEl = document.createElement('div');
      toastEl.className = `toast align-items-center text-white bg-${type === 'success' ? 'success' : 'danger'} border-0`;
      toastEl.role = 'alert';
      toastEl.setAttribute('aria-live', 'assertive');
      toastEl.setAttribute('aria-atomic', 'true');
      
      toastEl.innerHTML = `
          <div class="d-flex">
              <div class="toast-body">
                  ${message}
              </div>
              <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
      `;
      
      document.body.appendChild(toastEl);
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
      
      // Remove toast after it's hidden
      toastEl.addEventListener('hidden.bs.toast', function() {
          document.body.removeChild(toastEl);
      });
  }
});

// Set minimum date for date inputs to today
document.addEventListener('DOMContentLoaded', function() {
  const today = new Date().toISOString().split('T')[0];
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  
  if (startDateInput) startDateInput.min = today;
  if (endDateInput) endDateInput.min = today;
  
  // Update end date min when start date changes
  if (startDateInput && endDateInput) {
      startDateInput.addEventListener('change', function() {
          endDateInput.min = this.value;
          if (endDateInput.value && new Date(endDateInput.value) < new Date(this.value)) {
              endDateInput.value = this.value;
          }
      });
  }
});

// Image Upload and Preview Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle image preview
    function handleImagePreview(input, previewId) {
        const file = input.files[0];
        if (file) {
            // Check file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert('حجم الصورة يجب أن لا يتجاوز 2 ميجابايت');
                input.value = '';
                return;
            }

            // Check file type
            const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (!validTypes.includes(file.type)) {
                alert('نوع الملف غير مدعوم. الرجاء تحميل صورة بصيغة JPG أو PNG أو GIF');
                input.value = '';
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                const preview = document.getElementById(previewId);
                preview.src = e.target.result;
                
                // Here you would typically upload the image to your server
                // For example: uploadImage(file, productId);
            }
            reader.readAsDataURL(file);
        }
    }

    // Initialize image upload for all product modals when they're shown
    document.querySelectorAll('[id^="edit-product-"]').forEach(modal => {
        modal.addEventListener('show.bs.modal', function (event) {
            const modalId = this.id;
            const productId = modalId.split('-')[2]; // Extract product ID from modal ID
            
            const uploadInput = document.getElementById(`product-image-upload-${productId}`);
            const previewImg = document.getElementById(`product-image-preview-${productId}`);
            
            if (uploadInput && previewImg) {
                uploadInput.addEventListener('change', function() {
                    handleImagePreview(this, `product-image-preview-${productId}`);
                });
                
                // Make the image clickable to trigger file input
                previewImg.addEventListener('click', function() {
                    uploadInput.click();
                });
            }
        });
    });
});

// Function to handle image upload (you'll need to implement the server-side part)
async function uploadImage(file, productId) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('productId', productId);

    try {
        // Show loading state
        const saveButton = document.querySelector(`#edit-product-${productId} .btn-save`);
        const originalButtonText = saveButton.innerHTML;
        saveButton.disabled = true;
        saveButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> جاري الحفظ...';

        const response = await fetch('/api/upload-product-image', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        // Restore button state
        saveButton.disabled = false;
        saveButton.innerHTML = originalButtonText;
        
        if (result.success) {
            showToast('تم تحديث صورة المنتج بنجاح', 'success');
            return result.imageUrl;
        } else {
            console.error('فشل رفع الصورة:', result.message);
            showToast('حدث خطأ أثناء رفع الصورة', 'error');
            return null;
        }
    } catch (error) {
        console.error('خطأ في رفع الصورة:', error);
        showToast('حدث خطأ في الاتصال بالخادم', 'error');
        return null;
    }
}

// Function to show toast messages
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast show align-items-center text-white bg-${type === 'success' ? 'success' : 'danger'} border-0`;
    toast.role = 'alert';
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="fa ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2"></i>
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove toast after 5 seconds
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});