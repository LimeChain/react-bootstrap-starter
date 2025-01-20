import { useState } from 'react';

import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import Heading from '../components/ui/Heading';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container my-5 my-lg-10">
      <h1 className="heading-large text-bold text-center text-lg-start mt-5 mt-lg-10">
        Styleguide
      </h1>

      <Heading size="medium" title="Colors" className="mt-10" />

      <h3 className="text-headline mb-4">Main</h3>

      <div className="row mb-4">
        <div className="col-12 col-md-2">
          <div
            style={{ height: '64px', lineHeight: '64px', borderRadius: '2px' }}
            className="mb-2 bg-primary text-white text-center"
          >
            Primary
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div
            style={{ height: '64px', lineHeight: '64px', borderRadius: '2px' }}
            className="mb-2 bg-secondary text-white text-center"
          >
            Secondary
          </div>
        </div>
      </div>

      <h3 className="text-headline mb-4">System</h3>

      <div className="row mb-4">
        <div className="col-12 col-md-2">
          <div
            style={{ height: '64px', lineHeight: '64px', borderRadius: '2px' }}
            className="mb-2 bg-success text-white text-center"
          >
            Success
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div
            style={{ height: '64px', lineHeight: '64px', borderRadius: '2px' }}
            className="mb-2 bg-danger text-white text-center"
          >
            Danger
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div
            style={{ height: '64px', lineHeight: '64px', borderRadius: '2px' }}
            className="mb-2 bg-warning text-white text-center "
          >
            Warning
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div
            style={{ height: '64px', lineHeight: '64px', borderRadius: '2px' }}
            className="mb-2 bg-info text-white text-center"
          >
            Info
          </div>
        </div>
      </div>

      <Heading size="medium" title="Typography" className="mt-10" />

      <div className="mb-4">
        <div className="row">
          <div className="col-xl-6">
            <code>.heading-large</code>
            <h2 className="heading-large mt-3">The quick brown fox jumps over the lazy dog</h2>
          </div>
        </div>
      </div>

      <hr className="mt-6 mb-6" />

      <div className="mb-4">
        <div className="row">
          <div className="col-xl-6">
            <code>.heading-medium</code>
            <h2 className="heading-medium mt-3">The quick brown fox jumps over the lazy dog</h2>
          </div>
        </div>
      </div>

      <hr className="mt-6 mb-6" />

      <div className="mb-4">
        <div className="row">
          <div className="col-xl-6">
            <code>.heading-small</code>
            <h2 className="heading-small mt-3">The quick brown fox jumps over the lazy dog</h2>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="row">
          <div className="col-xl-6">
            <code>.text-lead</code>
            <p className="text-lead mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-6 mb-6" />

      <div className="mb-4">
        <div className="row">
          <div className="col-xl-6">
            <code>.text-main</code>
            <p className="text-main mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-6 mb-6" />

      <div className="mb-4">
        <div className="row">
          <div className="col-xl-6">
            <code>.text-small</code>
            <p className="text-small mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <Heading size="medium" title="Buttons" className="mt-10" />

      <div className="my-5">
        <div className="d-flex">
          <Button className="me-3" type="primary" size="large">
            Primary Button
          </Button>
          <Button className="me-3" type="secondary" size="large">
            Secondary Button
          </Button>
        </div>
        <div className="d-flex mt-3">
          <Button className="me-3" type="primary">
            Primary Button
          </Button>
          <Button className="me-3" type="secondary">
            Secondary Button
          </Button>
        </div>
        <div className="d-flex mt-3">
          <Button className="me-3" type="primary" size="small">
            Primary Button
          </Button>
          <Button className="me-3" type="secondary" size="small">
            Secondary Button
          </Button>
        </div>
      </div>

      <div className="my-5">
        <div className="d-flex ">
          <Button className="me-3" type="primary">
            Primary Button
          </Button>
          <Button className="me-3" type="primary" loading={true}>
            Primary Loading
          </Button>
          <Button className="me-3" type="primary" disabled={true}>
            Primary Disabled
          </Button>
        </div>
      </div>

      <Heading size="medium" title="Modals" className="mt-10" />

      <div className="my-5">
        <Button type="primary" onClick={() => setModalOpen(true)}>
          Open modal
        </Button>
        <Modal show={modalOpen} closeModal={() => setModalOpen(false)}>
          <div className="modal-header">
            <h5 className="modal-title text-main text-bold" id="exampleModalLabel">
              Modal header
            </h5>
            <button
              onClick={() => setModalOpen(false)}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal content</p>
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-end">
              <Button type="secondary" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button className="ms-3" type="primary" onClick={() => setModalOpen(false)}>
                Okay
              </Button>
            </div>
          </div>
        </Modal>
      </div>

      <Heading size="medium" title="Forms" className="mt-10" />

      <div className="row mb-4">
        <div className="col-lg-3">
          <div className="form-group mb-5">
            <label>Default input</label>
            <input type="email" className="form-control" placeholder="name@example.com" />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group mb-5">
            <label>Default input invalid</label>
            <input
              type="email"
              className="form-control is-invalid"
              placeholder="name@example.com"
            />
            <div className="invalid-feedback">Invalid e-mail.</div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group mb-5">
            <label>Default input disabled</label>
            <input type="email" className="form-control" disabled placeholder="name@example.com" />
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-3">
          <div className="form-group mb-5">
            <label>Custom select</label>
            <div className="custom-select-wrapper">
              <select className="form-select">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group mb-5">
            <label>Custom select invalid</label>
            <div className="custom-select-wrapper">
              <select className="form-select is-invalid">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <Heading size="medium" title="Alerts" className="mt-10" />

      <div className="row mb-6">
        <div className="col-lg-6">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>

          <div className="alert alert-info alert-dismissible fade show mt-5" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>

        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>

          <div className="alert alert-danger alert-dismissible fade show mt-5" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>

      <Heading size="medium" title="Lists" className="mt-10" />

      <div className="row mb-4">
        <div className="col-lg-6">
          <ul className="list-icon">
            <li className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis maiores,
              voluptatibus sapiente quo ullam sint quam, nobis officiis incidunt impedit totam animi
              dignissimos ad, voluptate debitis! Sed, reprehenderit neque.
            </li>
            <li className="mb-4">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
              ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
            </li>
            <li className="mb-4">
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
              a bird on it squid single-origin coffee nulla assumenda shoreditch et.{' '}
            </li>
          </ul>
        </div>
      </div>

      <Heading size="medium" title="Pagination" className="mt-10" />

      <div className="row mb-4">
        <div className="col-lg-6">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#test">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#test">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#test">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#test">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#test">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
